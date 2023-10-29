//Quando o documento estiver carregado, vai acontecer uma função para carregar o datatable - Emprestimo é o nome da table

$(document).ready(function ()
{ 


    $('#Emprestimos').DataTable({
        language: {

            
            "decimal": "",
            "emptyTable": "No data available in table",
            "info": "Mostrando _START_ registro de _END_ em um total _TOTAL_ entradas",
            "infoEmpty": "Showing 0 to 0 of 0 entries",
            "infoFiltered": "(filtered from _MAX_ total entries)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "loadingRecords": "Loading...",
            "processing": "",
            "search": "Procurar:",
            "zeroRecords": "Nenhum registro correspondente encontrado",
            "paginate": {
                "first": "Primeiro",

                "last": "Ultimo",
                "next": "Proximo",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }
        }


        
    });

    setTimeout(function () { //settimeout executa uma função, depois de uma quantidade de tempo
        $(".alert").fadeOut("slow", function ()  { //vai dentro da div de alert e fazer a operação de fazer desaparecer a mensagem em 5000 milesegundos e vai fechar a mensagem
            $(this).alert('close');

        })

    }, 5000)
    
    
    








});
