function setEqualHeight(columns)
{
    var tallestcolumn = 0;
    columns.each(
        function()
        {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}
// var cols = $('[class^="col-"]');
// console.log(cols);
$(document).ready(function() {
    setEqualHeight($(".row-equal > div"));
});