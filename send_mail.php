<?php

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);


$name = $data["name"];
$phone_1 = $data["phone_1"];
$phone_2 = $data["phone_2"];
$form = $data["form"];

//echo $form;

$to  = "dennuvo@yandex.ru" ;
$to .= ", prod@vozduhvoda.ru";

$subject = "Данные клиента с сайта White Resort";

$message = "Имя: $name, Телефон: +7 $phone_1 $phone_2, Форма: $form";

$headers  = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: От кого письмо <no-reply@whiteresort.ru>\r\n";
$headers .= "Reply-To: reply-to@whiteresort.ru\r\n";

$return = mail($to, $subject, $message, $headers);
//echo print_r($data, true);
return $return;
?>