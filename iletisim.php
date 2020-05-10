<table>
<tr>
    <td>
        Adı 
    </td>
    <td>:</td>
    <td>
        <?php
            echo $_POST['isim'];
        ?>
    </td>
</tr>
<tr>
    <td>
        Soyadı 
    </td>
    <td>:</td>
    <td>
        <?php
            echo $_POST['soyisim'];
        ?>
    </td>
</tr>
<tr>
    <td>
        Şehir 
    </td>
    <td>:</td>
    <td>
        <?php
            echo $_POST['sehirler'];
        ?>
    </td>
</tr>
<tr>
    <td>
        Hobi(ler) 
    </td>
    <td>:</td>
    <td>
        <?php
            if(isset($_POST['hobi'])) {
                $hobiler = $_POST['hobi'];
             
                foreach($hobiler as $hobi) {
                    echo  $hobi . ', ';
                }
            }
        ?>
    </td>
</tr>
<tr>
    <td>
        Cinsiyet
    </td>
    <td>:</td>
    <td>
        <?php
            echo $_POST['cinsiyet'];
        ?>
    </td>
</tr>
<tr>
    <td>
        Mesaj 
    </td>
    <td>:</td>
    <td>
        <?php
            echo $_POST['ileti'];
        ?>
    </td>
</tr>
</table>