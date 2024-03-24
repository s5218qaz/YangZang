import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: ProductVm[] = [
    {
      title: '此木設計室',
      description: '我們的服務不僅僅是提供設計和工程管理，更是為您打造一個細緻、舒適的生活空間。無論是住宅還是商業空間，' +
        '我們專業的設計團隊將以創新的風格和精湛的工藝，呈現出獨特的室內設計方案。讓我們一起開始，打造一個與眾不同的生活環境！',
      imgUrls: ['img1', 'img2', 'img3', 'img4']
    },
    {
      title: '日王設計室',
      description: '我們的室內設計服務涵蓋各種場景，從住宅到商業空間，從建案實品屋到公共設施。' +
        '無論您的需求是什麼，我們都有專業的團隊為您量身打造最適合的設計方案。主持設計總監 盧國輝憑藉20年的豐富經驗，將您的想象轉化為現實，' +
        '讓您的生活空間充滿無盡的可能性。',
      imgUrls: ['img6', 'img5', 'img2', 'img4']
    },
    {
      title: '日和設計室',
      description: '我們的設計團隊以細膩的服務和獨特的設計風格著稱。我們不僅專業，更注重每一個細節，確保為您提供完美的室內設計方案。' +
        '無論您的需求是什麼，我們都將以專業的態度和精湛的工藝為您打造一個獨一無二的生活空間。',
      imgUrls: ['img3', 'img5', 'img2', 'img4']
    },
    {
      title: '捲尾巴設計室',
      description: '我們的設計團隊以20年的豐富經驗為您提供專業的室內設計及工程管理服務。無論是住宅、商業空間、建案實品屋或接待中心，' +
        '我們都致力於為您打造一個創新風格與質感兼具的生活空間。主持設計總監 王將率領團隊，堅持對設計的熱情和工程的精細要求，讓您的夢想家園成為現實。',
      imgUrls: ['img2', 'img5', 'img6', 'img4']
    }
  ];

  constructor() { }

  get products(): ProductVm[]{
    return this.productList;
  }
}

export interface ProductVm {
  title: string;
  description: string;
  imgUrls: string[];
}
