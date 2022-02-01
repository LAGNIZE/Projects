<?php
    //echo 'Hello world!';
    //file_get_contents - функция для считывания содержимого файла в строку. Она задействует метод отображения файла в память.
    //сохранем ответ от сервера в переменную
    //echo file_get_contents('');
    //$data = file_get_contents('https://teamcadillac.ru/');
    //создать файл
    //file_put_contents('data.html', $data);
    $cars = [
        [
            'mark' => 'BMW',
            'model' => 'X6',
            'price' => '6000000'
        ],
        [
            'mark' => 'BMW',
            'model' => 'X1',
            'price' => '3000000'
        ],
        [
            'mark' => 'BMW',
            'model' => 'X3',
            'price' => '4000000'
        ],
        [
            'mark' => 'Mercedes',
            'model' => 'C200',
            'price' => '6000000'
        ],
        [
            'mark' => 'Audi',
            'model' => 'A6',
            'price' => '6000000'
        ],
    ];
    // json_decode & json_encode - функции прямого и обратного преобразования в JSON
    //echo json_encode($cars);
    // идём в тг
    $url = 'https://api.telegram.org/bot2023002074:AAGO_S2mD-ZzIBiLAlBblgGE-9hJGXbur7c/getUpdates';
    $json = file_get_contents($url);
    $data = json_decode($json, true);
    //json_decode по умолчанию создаёт объект, а не массив
    //чтобы был ассоц. массив, нужно написать $data = json_decode($json, true);
    $length = count($data['result']);
    if (count($data['result']) > 0) {
        for ($x = 0; $x < $length; $x++) {
            $text = $data['result'][$x]['message']['text'];
            echo $text;
        }
    }
?>