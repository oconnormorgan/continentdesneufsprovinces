<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    
    <title>Le continent des neufs provinces</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet" />
</head>

<body class="ma-0 pa-0">
    <div id="app" class="ma-0 pa-0">
        <layout></layout>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>