<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$lattices = $_POST['lattices'];
$amount = $_POST['amount'];
$fullName = $_POST['fullName'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'ordersb@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'PyApUO1_ite1'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('ordersb@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('5p9685dwwm@inscriptio.in');     // Кому будет уходить письмо
$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта';
$mail->Body = '<b>Имя:</b> '. $fullName .
    '<br><b>Номер телефона:</b> ' . $phone .
    '<br><b>Почта:</b> ' . $email .
    '<br><b>Тип решетки:</b> ' . $lattices .
    '<br><b>Количество:</b> ' . $amount .
    '<br><b>Адрес доставки:</b> ' . $address;
$mail->AltBody = '';

if (!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>
