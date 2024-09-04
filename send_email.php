<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari formulir
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Set email penerima
    $to = 'devaakbarm28@gmail.com';  // Ganti dengan email
    $subject = 'Pesan Baru';
    $body = "Nama: $name\nEmail: $email\nPesan:\n$message";
    $headers = "From: $email";
    
    // Kirim email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Pesan Anda telah dikirim!';
    } else {
        echo 'Terjadi kesalahan saat mengirim pesan.';
    }
}
?>