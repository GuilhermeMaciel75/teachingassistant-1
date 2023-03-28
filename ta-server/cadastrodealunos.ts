import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
   alunos: Aluno[] = [];

    cadastrar(aluno: Aluno): Aluno {
     var result = null;
     if (this.cpfNaoCadastrado(aluno.cpf)) {
       result = new Aluno();
       result.copyFrom(aluno);
       this.alunos.push(result);
     }
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.alunos.find(a => a.cpf == cpf);
   }

   remover(aluno: Aluno): Aluno {
    var encontra_aluno: number = this.alunos.findIndex(((alunoc) => alunoc.cpf == aluno.cpf));
    var resultado: Aluno = aluno;
    if (encontra_aluno != -1) this.alunos.splice(encontra_aluno-1, 1);
    else resultado = null;
    return resultado;
   }

    atualizar(aluno: Aluno): Aluno {
     var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
     if (result) result.copyFrom(aluno);
     return result;
   }

   getAluno(cpf:string): Aluno {
    return this.alunos.find((aluno) => aluno.cpf = cpf);
   }

    getAlunos(): Aluno[] {
     return this.alunos;
   }
}