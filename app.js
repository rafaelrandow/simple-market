'use strict';

angular.module('SimpleMarket',['ngRoute']).config(function ($routeProvider) {
   $routeProvider
     // Rota padrão do nosso app; Enviará o usuário para a lista de contatos
     .when('/', {
       templateUrl: 'views/listar.html',
       controller: 'ProdutosCtrl'
     })
     // Rota padrão do nosso app; Enviará o usuário para a lista de contatos
     .when('/importar', {
       templateUrl: 'views/importar.html',
       controller: 'ProdutosCtrl'
     })
     // Redirecionamento, caso o usuário tente acessar uma rota não cadastrada
     .otherwise({
       redirectTo: '/'
     });
 });