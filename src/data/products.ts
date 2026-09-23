import { getAllProducts } from '../lib/content';
import { Product } from '../types';

export const productCategories = [
  'Todas as Categorias',
  'Câmeras de Rede',
  'Controle de Acesso',
  'Infraestrutura de Redes',
  'Áudio IP & Mensageria',
  'Software e Licenças',
  'Automação & Cancelas',
  'Alarmes & Perímetro',
];

export const productBrandsList = [
  'Todas as Marcas',
  'AXIS Communications',
  'Avigilon',
  'Hanwha Vision',
  'Genetec',
  'Bosch',
  'Cisco',
  'CAME',
  'Tyco',
  'Hikvision',
  'Furukawa',
];

export const productApplications = [
  'Todas as Aplicações',
  'Indústria e Fábricas',
  'Governo e Defesa',
  'Energia e Subestações',
  'Hospitais e Saúde',
  'Corporativo e Escritórios',
  'Condomínios e Portarias',
  'Logística e Centros de Distribuição',
];

export const productsCatalog: Product[] = getAllProducts();
export const productsData: Product[] = productsCatalog;
