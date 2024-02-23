import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  preco: string;
  dataValidade: string;
  quantidade: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}