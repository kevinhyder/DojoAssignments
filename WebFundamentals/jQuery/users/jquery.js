$(document).ready(function(){

        $("button").click(function(){
            $("form").submit()
        });
        $("form").on("submit", function(){
            var str = "<tr>";
            $("input").each(function(){
                str += "<td>" + $(this).val() + "</td>";
            });
            str += "</tr>";
            $("tbody").append(str);
            return false;
        });
});