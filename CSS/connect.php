<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];
    $rating = $_POST["rating"];
}
if($con){
    <!-- echo "connection successful"; -->
    $sql="insert into `people data`(name,email,comment,rating)values('$name','$email','$comment','$rating')";
    $result=mysqli_query($con,$sql);
    if(!$result){
        echo "Data inserted successfully"
    }else{
        die(mysqli_error($con));
    }
}else{
    die(mysqli_error($con));
}

?>