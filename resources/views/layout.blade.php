<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>QmarT</title>
    <meta name="google-site-verification" content="KlFD8HcyZl4za4AVCB5vKHA5bd--3nl7yzZSYVKZnVM" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('frontend2/static/img/smallLogo.png') }}">
    <link rel="stylesheet" href="{{ asset('dashboard_asset/css/all.min.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- <!-- Favicon -->
    <!-- Normalize CSS -->
    <link rel="stylesheet" href="{{ asset('dashboard_asset/css/normalize.css') }}">
    <!-- Main CSS -->
    <link rel="stylesheet" href="{{ asset('dashboard_asset/css/main.css') }}">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('dashboard_asset/css/bootstrap.min.css') }}">
    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="{{ asset('dashboard_asset/css/all.min.css') }}">
    <!-- Flaticon CSS -->
    <link rel="stylesheet" href="{{ asset('dashboard_asset/fonts/flaticon.css') }}">

    <link rel="stylesheet" href="{{ asset('dashboard_asset/style.css') }}"> --}}



    {{-- <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.4/css/buttons.dataTables.min.css">
    <link rel="stylesheet" href="{{ asset('css/datatables.min.css') }}"> --}}
    <link rel="stylesheet" href="{{ asset('css/app.css?ver=1.0.0') }}">
<style>
            *{
                --defaltColor:#0074BD;
                --button1:#C6E037;
                --button2:#FFEC76;
            }

</style>
    {{-- <link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.8/semantic.min.css">
    <link rel="stylesheet" type="text/css" href="http://cdn.datatables.net/1.12.1/css/dataTables.semanticui.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.semanticui.min.css"> --}}

</head>
<body>

    <div id="app">
        <component :is="$route.meta.layout || 'div'"   :users="{{Auth::user()}}"  :roles="{{ $roles }}">
            <router-view />
          </component>

</div>




<script src="{{ asset('js/backend.js?ver=1.0.12') }}"></script>



{{--0
<!-- Popper js -->
<script src="{{ asset('dashboard_asset/js/popper.min.js') }}"></script>
<!-- Bootstrap js -->
<script src="{{ asset('dashboard_asset/js/bootstrap.min.js') }}"></script> --}}



{{-- <script src="{{ asset('js/datatables.min.js') }}"></script> --}}
</body>
</html>



<?php
// require_once('vendor/autoload.php');

// $client = new \GuzzleHttp\Client();

// $response = $client->request('POST', 'https://sandbox.uddoktapay.com/api/checkout', [
//   'body' => '{"full_name":"Freelancer Nishad","email":"freelancernishad123@gmail.com","amount":"10","metadata":{"order_id":"10","product_id":"5"},"redirect_url":"https://www.tmscedu.com/","cancel_url":"https://www.tmscedu.com/","webhook_url":"https://www.tmscedu.com/"}',
//   'headers' => [
//     'RT-UDDOKTAPAY-API-KEY' => '982d381360a69d419689740d9f2e26ce36fb7a50',
//     'accept' => 'application/json',
//     'content-type' => 'application/json',
//   ],
// ]);

// echo $response->getBody();
