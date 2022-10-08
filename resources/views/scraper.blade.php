<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title>Page Title</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="">
<style>
</style>
<script src=""></script>
<body>
<table>
    <thead>
    <tr>
        <th> id</th>
        <th> name</th>
        <th> last name  </th>
        <th> email </th>
        <th> phone</th>
        <th> adddress </th>
    </tr>
    </thead>
    <tbody>
    dd($table)
    @foreach($table as $j)
        <tr>
            <td> {{$j}} </td>
        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>
