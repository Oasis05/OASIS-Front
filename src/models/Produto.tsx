import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  dataValidade: string;
  quantidade: number;
  foto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
