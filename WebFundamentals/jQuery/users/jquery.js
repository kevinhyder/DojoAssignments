$(document).ready(function(){

        $("button").click(function(){
            $("form").submit()
        });
        $("form").on("submit", function(){
            var htmlString = "<tr>";
            $("input").each(function(){
                htmlString += "<td>" + $(this).val() + "</td>"
            });
            htmlString += "</tr>"
            $("tbody").append(htmlString);
            return false;
        });
    });