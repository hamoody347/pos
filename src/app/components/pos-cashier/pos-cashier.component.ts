import { Component, OnInit, PipeTransform, Input } from '@angular/core';
import { SalesScreenItemsModel, SalesScreenBillModel, DebtPaymentModel, ReceiptRevisionModel } from './pos-cashier.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, switchMap, map } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { PosSidebarService } from 'src/app/Layout/Components/pos-sidebar/pos-sidebar.service';
import { APISimulatorService } from 'src/app/API-simulator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos-cashier',
  templateUrl: './pos-cashier.component.html',
  styleUrls: ['./pos-cashier.component.css'],
  providers: [DecimalPipe]
})
export class PosCashierComponent implements OnInit {

  tax = false;
  barcode = null;
  category: string;
  wrongBarcode = false;
  paymentMethod: string;

  screens = [{ number: 'One', id: 1 }, { number: 'Two', id: 2 }];

  debtsAll: DebtPaymentModel[] = [];
  itemsAll: SalesScreenItemsModel[] = [];
  receiptsAll: ReceiptRevisionModel[] = [];
  billDetails: SalesScreenItemsModel[] = [];

  // Receipt Revision Pagination
  receiptPage = 1;
  receiptPageSize = 2;
  receiptCollectionSize = this.receiptsAll.length;

  // Debt Payment Pagination
  debtPage = 1;
  debtPageSize = 2;
  debtCollectionSize = this.debtsAll.length;

  // Items Search
  filteredItems: any[];
  itemFilter = new FormControl('');

  // Debt Payment Search
  filteredDebts: any[];
  debtFilter = new FormControl('');

  // Receipt Revision Search
  filteredReceipts: any[];
  receiptFilter = new FormControl('');

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private api: APISimulatorService,
    private categoryService: PosSidebarService,
  ) {

  }

  ngOnInit() {
    if (this.api.getShift() === false) {
      this.router.navigate(['/']);
    }
    this.itemsAll = this.api.getItems();
    this.debtsAll = this.api.getDebts();
    this.receiptsAll = this.api.getReceipts();

    this.itemFilter.valueChanges.subscribe(value => {
      this.filteredItems = this.itemSearch(value);
    });

    this.debtFilter.valueChanges.subscribe(value => {
      this.filteredDebts = this.debtSearch(value);
    });

    this.receiptFilter.valueChanges.subscribe(value => {
      this.filteredReceipts = this.receiptSearch(value);
    });

    this.categoryService.currentCategory.subscribe(value => {
      this.category = value;
    });
  }

  // Bill Management
  addToCart(item: SalesScreenItemsModel) {
    const itemExists = this.billDetails.some(element => element.itemId === item.itemId);
    if (itemExists) {
      this.billDetails = this.billDetails.map(element => ({
        ...element,
        itemQuantity: element.itemQuantity + (element.itemId === item.itemId ? 1 : 0)
      }));
    } else {
      this.billDetails = [...this.billDetails, item];
    }
  }

  addToCartBarcodeScanner(barcode: number) {
    this.wrongBarcode = false;
    const item = this.items.filter(ele => ele.itemId.toString() === barcode);
    if (item[0]) {
      this.addToCart(item[0]);
      this.barcode = null;
    } else {
      this.wrongBarcode = true;
    }
  }

  quantityControl(itemIndex: number, operation: boolean) {
    if (operation === true) {
      this.billDetails = this.billDetails.map((element, index) => ({
        ...element,
        itemQuantity: element.itemQuantity + (index === itemIndex ? 1 : 0)
      }));
    } else if (operation === false) {
      this.billDetails = this.billDetails.map((element, index) => ({
        ...element,
        itemQuantity: element.itemQuantity - (index === itemIndex ? 1 : 0)
      }));
    }
    this.billDetails = this.billDetails.filter(ele => ele.itemQuantity > 0);
  }

  getTotalPrice() {
    let totalPrice = 0;
    if (this.billDetails.length !== 0) {
      this.billDetails.map((ele) => {
        totalPrice += ele.itemPrice * ele.itemQuantity + 0;
      });
    }
    if (this.tax === false) {
      return totalPrice;
    } else {
      return (totalPrice + (totalPrice * 0.33));
    }
  }

  deleteBillItem(itemIndex: number) {
    this.billDetails = this.billDetails.filter((element, index) => index !== itemIndex);
  }

  // Modals
  open(content, sizes?) {
    if (sizes) {
      this.modalService.open(content, { size: sizes }).result.then((result) => {
      }, (reason) => {
        this.paymentMethod = reason;
        console.log(this.paymentMethod, 'pm', reason);
      });
    } else {
      this.modalService.open(content).result.then((result) => {
      }, (reason) => {
        this.paymentMethod = reason;
      });

    }
  }

  // Filter Arrays
  // Receipt Revision Pagination Array
  get receipts() {
    this.filteredReceipts = this.receiptSearch(this.receiptFilter.value);
    this.receiptCollectionSize = this.filteredReceipts.length;

    return this.filteredReceipts
      .map((receipt, i) => ({ id: i + 1, ...receipt }))
      .slice((this.receiptPage - 1) * this.receiptPageSize, (this.receiptPage - 1) * this.receiptPageSize + this.receiptPageSize);
  }

  // Debt Payment Pagination Array
  get debts() {
    this.filteredDebts = this.debtSearch(this.debtFilter.value);
    this.debtCollectionSize = this.filteredDebts.length;

    return this.filteredDebts
      .map((debt, i) => ({ id: i + 1, ...debt }))
      .slice((this.debtPage - 1) * this.debtPageSize, (this.debtPage - 1) * this.debtPageSize + this.debtPageSize);
  }

  // Items Filter Array
  get items() {
    this.filteredItems = this.itemSearch(this.itemFilter.value);
    if (this.category === 'all') {
      return this.filteredItems;
    }
    return this.filteredItems.filter(category => {
      return category.itemCategory === this.category;
    });
  }

  // Private Search Function
  private receiptSearch(text: string) {
    return this.receiptsAll.filter(receipt => {
      const term = text.toLowerCase();
      return receipt.clientName.toLowerCase().includes(term)
        || receipt.receiptNumber.toString().includes(term)
        || receipt.receiptAmount.toString().includes(term)
        || receipt.receiptDate.toString().includes(term)
        || receipt.receiptStatus.toString().includes(term);
    });
  }

  private debtSearch(text: string): any[] {
    return this.debtsAll.filter(debt => {
      const term = text.toLowerCase();
      return debt.clientName.toLowerCase().includes(term)
        || debt.groupName.toLowerCase().includes(term)
        || debt.receiptNumber.toString().includes(term)
        || debt.totalAmount.toString().includes(term)
        || debt.clientMobileNumber.toString().includes(term)
        || debt.paidAmount.toString().includes(term)
        || debt.receiptDate.includes(term);
    });
  }

  private itemSearch(text: string): any[] {
    return this.itemsAll.filter(debt => {
      const term = text.toLowerCase();
      return debt.itemName.toLowerCase().includes(term);
    });
  }

}
