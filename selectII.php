<?php
$option = 1980;

echo "<select>";
while ($option<=2018){
    echo "<option>". $option ."</option>";
    $option ++;
}
echo "</select>";