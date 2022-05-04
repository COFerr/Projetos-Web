function verificarEntrada(){
  nomeConvidado = document.getElementById('nome').value;
  convidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
  console.log(nomeConvidado);
  if(convidadosCristian.includes(nomeConvidado)){
    document.getElementById('permissaoDeEntrada').innerText = 'Você pode entrar!'
  }
  else{
    document.getElementById('permissaoDeEntrada').innerText = "Você não pode entrar!"
  }
}