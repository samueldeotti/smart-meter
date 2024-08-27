export type Measure = {
  uuid: number;
  customerCode: string;
  measureType: 'WATER' | 'GAS';
  measureValue: number;
  measureDatetime: Date;
  hasConfirmed: boolean;
  image: string;
}