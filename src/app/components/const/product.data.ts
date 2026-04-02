import { Product } from "../model/product.model";


export const PRODUCT_DATA: Product[] = [
  {
    id: 1,
    name: 'Furnace Transformer',
    category: 'Transformer',
    image: 'https://th.bing.com/th/id/R.9f89a935e9264319c4289ed4570f4155?rik=vbEbZrxfz4qTnA&riu=http%3a%2f%2fwww.amelt.com%2fwp-content%2fuploads%2f2018%2f03%2fTransformer.png&ehk=Nl7TgulV7fCsiCewx8qnLakQTRUDbAag5gIoaaHuilQ%3d&risl=&pid=ImgRaw&r=0',
    company: 'Rajkot Powertrans Private Limited',
    details: {
      voltage: '33kV, 22kV, 11kV',
      rating: '250kVA to 2500kVA',
      cooling: 'ONAN',
      material: 'Copper, Aluminium'
    }
  },
  {
    id: 2,
    name: 'Distribution Transformer',
    category: 'Transformer',
    image: 'https://tse3.mm.bing.net/th/id/OIP.A98GZCTa5ZjDgTmndJV3jgHaE0?rs=1&pid=ImgDetMain&o=7&rm=3',
    company: 'PAI KANE TRANSFORMERS LLP',
    details: {
      voltage: 'Up to 33kV',
      rating: 'Up to 3MVA',
      cooling: 'Oil cooled',
      material: 'Copper, Aluminium'
    }
  },
  {
    id: 3,
    name: 'Solar Panel',
    category: 'Solar',
    image: 'https://aurorasolar.com/wp-content/uploads/2022/05/New-Cover-How-PV-System-Produces-Electricity.webp',
    company: 'Tata Solar',
    details: {
      application: 'Electricity generation'
    }
  },
  {
    id: 4,
    name: 'Battery Storage',
    category: 'Solar',
    image: 'https://tse3.mm.bing.net/th/id/OIP.27bkzxLeMc8PgPyA3PM88AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    company: 'Exide',
    details: {
      application: 'Energy storage'
    }
  },
  {
    id: 5,
    name: 'AC Motor',
    category: 'Motor',
    image: 'https://www.raxmotor.com/wp-content/uploads/2023/03/AC-Motors.jpg',
    company: 'Siemens',
    details: {
      application: 'Industrial usage'
    }
  }
];