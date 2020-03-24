import { Injectable } from '@angular/core';
import { SalesScreenItemsModel, DebtPaymentModel, ReceiptRevisionModel } from './components/pos-cashier/pos-cashier.model';

@Injectable({
  providedIn: 'root'
})
export class APISimulatorService {

  constructor() { }

  itemsAll: SalesScreenItemsModel[] = [
    {
      itemId: 0, itemName: 'Blue Shirt', itemPrice: 25, itemQuantity: 1, itemCategory: 'shirts',
      itemPicture: './assets/images/items/shirt.jpg',
      totalPrice: 1.2, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 1, itemName: 'Blue Shirt Striped', itemPrice: 32, itemQuantity: 1, itemCategory: 'shirts',
      itemPicture: './assets/images/items/shirt1.jpg',
      totalPrice: 25, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 2, itemName: 'Light Blue T-Shirt', itemPrice: 18, itemQuantity: 1, itemCategory: 'shirts',
      itemPicture: './assets/images/items/shirt-2.jpg',
      totalPrice: 8, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 3, itemName: 'Yellow 3D T-Shirt', itemPrice: 22, itemQuantity: 1, itemCategory: 'shirts',
      itemPicture: './assets/images/items/shirt-3.jpg',
      totalPrice: 1.2, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 4, itemName: 'Black and White Shirt', itemPrice: 12, itemQuantity: 1, itemCategory: 'shirts',
      itemPicture: './assets/images/items/shirt-4.jpg',
      totalPrice: 25, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 5, itemName: 'Blue and White Shirt', itemPrice: 26, itemQuantity: 1, itemCategory: 'shirts',
      itemPicture: './assets/images/items/shirt-5.jpg',
      totalPrice: 8, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 6, itemName: 'Yellow T-Shirt', itemPrice: 20, itemQuantity: 1, itemCategory: 'shirts',
      itemPicture: './assets/images/items/shirt-6.jpg',
      totalPrice: 1.2, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 7, itemName: 'Shark Print 3D T-Shirt', itemPrice: 49.9, itemQuantity: 1, itemCategory: 'shirts',
      itemPicture: './assets/images/items/shirt-8.jpg',
      totalPrice: 25, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 8, itemName: 'Basketball Shoes Nike', itemPrice: 256, itemQuantity: 1, itemCategory: 'shoes',
      itemPicture: './assets/images/items/shoe.jpg',
      totalPrice: 8, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 9, itemName: 'Black Vans', itemPrice: 76, itemQuantity: 1, itemCategory: 'shoes',
      itemPicture: './assets/images/items/shoe-1.jpg',
      totalPrice: 1.2, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 10, itemName: 'Black Nike', itemPrice: 121, itemQuantity: 1, itemCategory: 'shoes',
      itemPicture: './assets/images/items/shoe-2.jpg',
      totalPrice: 25, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 11, itemName: 'Brown Shoes', itemPrice: 45, itemQuantity: 1, itemCategory: 'shoes',
      itemPicture: './assets/images/items/shoe-3.jpg',
      totalPrice: 8, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 12, itemName: 'Blue and Red Nike', itemPrice: 300, itemQuantity: 1, itemCategory: 'shoes',
      itemPicture: './assets/images/items/shoe-4.jpg',
      totalPrice: 1.2, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 13, itemName: 'Potatoes', itemPrice: 12, itemQuantity: 1, itemCategory: 'vegetables',
      itemPicture: './assets/images/items/veg-1.jpg',
      totalPrice: 25, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 14, itemName: 'Beet', itemPrice: 8, itemQuantity: 1, itemCategory: 'vegetables',
      itemPicture: './assets/images/items/veg-2.jpg',
      totalPrice: 8, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 15, itemName: 'Tomatoes', itemPrice: 9, itemQuantity: 1, itemCategory: 'vegetables',
      itemPicture: './assets/images/items/veg-3.jpg',
      totalPrice: 1.2, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 16, itemName: 'White Brocli', itemPrice: 3.2, itemQuantity: 1, itemCategory: 'vegetables',
      itemPicture: './assets/images/items/veg-4.jpg',
      totalPrice: 25, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 17, itemName: 'Carrots', itemPrice: 2, itemQuantity: 1, itemCategory: 'vegetables',
      itemPicture: './assets/images/items/veg-5.jpg',
      totalPrice: 8, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 18, itemName: 'Cucumber', itemPrice: 2.3, itemQuantity: 1, itemCategory: 'vegetables',
      itemPicture: './assets/images/items/veg-6.jpg',
      totalPrice: 1.2, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 19, itemName: 'Orange Football', itemPrice: 57, itemQuantity: 1, itemCategory: 'balls',
      itemPicture: './assets/images/items/ball-1.jpg',
      totalPrice: 25, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 20, itemName: 'Wilson Basketball', itemPrice: 80, itemQuantity: 1, itemCategory: 'balls',
      itemPicture: './assets/images/items/ball-3.jpg',
      totalPrice: 8, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 21, itemName: 'Nike Basketball', itemPrice: 100, itemQuantity: 1, itemCategory: 'balls',
      itemPicture: './assets/images/items/ball-4.jpg',
      totalPrice: 1.2, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 22, itemName: 'Molten Basketball', itemPrice: 30, itemQuantity: 1, itemCategory: 'balls',
      itemPicture: './assets/images/items/ball-5.jpg',
      totalPrice: 25, itemPictureAlt: 'failed to load'
    },
    {
      itemId: 23, itemName: 'Rainbow Football', itemPrice: 150, itemQuantity: 1, itemCategory: 'balls',
      itemPicture: './assets/images/items/ball-7.jpg',
      totalPrice: 8, itemPictureAlt: 'failed to load'
    }
  ];

  receiptsAll: ReceiptRevisionModel[] = [
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'paid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'unpaid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'paid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'unpaid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'paid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'unpaid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'paid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'unpaid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'unpaid' },
    { receiptNumber: 123456789, receiptDate: '05/09/2019', receiptAmount: 347, clientName: 'Ahmed Abdelsalam', receiptStatus: 'unpaid' },
  ];

  debtsAll: DebtPaymentModel[] = [
    {
      receiptNumber: 789510,
      receiptDate: '05/09/2019',
      clientName: 'Ali Ahmed',
      groupName: 'VIP',
      clientMobileNumber: '00249117247381',
      totalAmount: 1000,
      paidAmount: 347
    },

    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
    {
      receiptNumber: 123456789, receiptDate: '05/09/2019', clientName: 'Ahmed Abdelsalam', groupName: 'VIP',
      clientMobileNumber: '00249117247381', totalAmount: 1000, paidAmount: 347
    },
  ];

  cashiers = [
    { id: 1, name: 'Cashier 1' },
    { id: 2, name: 'Cashier 2' },
    { id: 3, name: 'Cashier 3' },
    { id: 4, name: 'Cashier 4' },
    { id: 5, name: 'Cashier 5' },
  ];

  shiftStatus = false;
  timer = 0;

  getItems() {
    return this.itemsAll;
  }

  getReceipts() {
    return this.receiptsAll;
  }

  getDebts() {
    return this.debtsAll;
  }

  getTimer() {
    return this.timer;
  }

  sendTimer(timer: number) {
    this.timer = timer;
  }

  getShift() {
    return this.shiftStatus;
  }

  sendShift(shift: boolean) {
    this.shiftStatus = shift;
  }

  getCashiers() {
    return this.cashiers;
  }
}
