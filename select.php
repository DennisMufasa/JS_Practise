<?php
$array = array(1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990);

echo "<select>".
foreach($array as $key => $value){
    echo "<option value = '$key'>$value</option>"
}."</select>"

