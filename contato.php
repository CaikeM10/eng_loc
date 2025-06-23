<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados
    $nome = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['phone']);
    $assunto = htmlspecialchars($_POST['subject']);
    $mensagem = htmlspecialchars($_POST['message']);
    
    // Enviar email
    $para = "chagasloc@outlook.com"; // ALTERE PARA SEU EMAIL
    $assunto_email = "Contato do site - " . ucfirst($assunto);
    $corpo = "Nome: $nome\nEmail: $email\nTelefone: $telefone\nAssunto: $assunto\nMensagem:\n$mensagem";
    $headers = "From: $email";
    
    // Salvar backup
    $dados = date('d/m/Y H:i:s') . " | $nome | $email | $telefone | $assunto | $mensagem\n";
    file_put_contents('contatos.txt', $dados, FILE_APPEND);
    
    // Enviar e redirecionar
    if(mail($para, $assunto_email, $corpo, $headers)) {
        header('Location: obrigado.html');
    } else {
        header('Location: erro.html');
    }
    exit;
}
?>