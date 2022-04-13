<?php

$arrayNumber = [0, 3, 4, 5, 9, 8, 1, 2, 10, 6, 7];

sort($arrayNumber);

echo "1. PHP: Вывести цифры по порядку - ";

foreach ($arrayNumber as $key) {
    echo $key;
}

echo "<br><br>2. MySQL: Написать запрос для выборки данных из таблицы, где id = 10 - SELECT * FROM `goods` WHERE `id` = 10";

$arrayInfo = [
    'name' => 'Ivan',
    'surname' => 'Ivanov',
    'address' => 'Petrovsk',
    'telephone' => '8 (985) 222-33-44'
];

echo "<br><br>3. PHP: Вывести ключи и значение массива<br>";
  
foreach($arrayInfo as $item => $val) {
    echo "$item" . " = " . "$val</br>";
}

$arrayMonth = [
    [
        1 => 'Январь',
        2 => 'Февраль',
        3 => 'Март'
    ],
    [
        1 => 'Апрель',
        2 => 'Май',
        3 => 'Июнь'
    ]
    ];

echo "<br>4. PHP: Вывести месяца года (???) - ";

foreach($arrayMonth as $key){
    foreach ($key as $month)
    {
        echo "$month" . " ";
    }
};

echo "<br><br>5. PHP: Дана информация в json формате, надо вывести её.<br>";

$json = '{"years":[1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008 ,2009,2010]}';

$obj = json_decode($json,true);

foreach ($obj['years'] as $key) {
    echo $key . " ";
}

echo "<br><br>6. 1) Будет ли выполнен запрос? - Да<br>
2) Что сделает запрос? - Вернет все строки из таблицы users<br>
3) Написать запрос для удаления данных, где id пользователей равен  одному из данных цифр = 1,2,3,4,5 - DELETE from users WHERE id BETWEEN 1 AND 254";

echo "<br><br>7. PHP и HTML: Написать форму с одним полей для вода текста и  кнопкой, по нажатию которой идёт сохранения данных из поля в файл.";
?>

<!DOCTYPE html>
<html>
<head>
  <title>Store form data in .txt file</title>
</head>
<body>
  <form method="post">
    Enter Your Text Here:<br>
    <input type="text" name="textdata"><br>
    <input type="submit" name="submit">
    
  </form>
</body>
</html>

<?php
              
if(isset($_POST['textdata']))
{
$data=$_POST['textdata'];
$fp = fopen('data.txt', 'a');
fwrite($fp, $data);
fclose($fp);
}

?>