export class SalesScreenModel {
    constructor(
        public billId: number,
        public screenId: number,
        public cashierId: number,
        public billNumber: number,
        public saleScreenLable: string,
        public billItems: SalesScreenItemsModel[],
    ) { }
}

export class SalesScreenBillModel {
    constructor(
        public billId: number,
        public screenId: number,
        public cashierId: number,
        public billNumber: number,
        public billItems: SalesScreenItemsModel[],
    ) { }
}

export class SalesScreenItemsModel {
    constructor(
        public itemId: number,
        public itemName: string,
        public itemPicture: any,
        public itemPrice: number,
        public totalPrice: number,
        public itemQuantity: number,
        public itemCategory: string,
        public itemPictureAlt: string,
    ) { }
}

export class ReceiptRevisionModel {
    constructor(
        public clientName: string,
        public receiptNumber: number,
        public receiptAmount: number,
        public receiptDate: string,
        public receiptStatus: string
    ) { }
}

export class DebtPaymentModel {
    constructor(
        public groupName: string,
        public clientName: string,
        public paidAmount: number,
        public receiptDate: string,
        public totalAmount: number,
        public receiptNumber: number,
        public clientMobileNumber: string,
    ) { }
}
