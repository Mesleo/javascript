/**
 * Created by anonimo1 on 08/02/2016.
 */
var miPlugin = (function(){
    jQuery.fn.creaTip = function(textoTip, opciones) {
        var configuracion = {
            velocidad: 500,
            animacionMuestra: {width: "show"},
            animacionOculta: {opacity: "hide"},
            claseTip: "tip"
        };
        jQuery.extend(configuracion, opciones);
        this.each(function(){
            var elem = $(this);
            var miTip = $('<div class="' + configuracion.claseTip + '">' + textoTip + '</div>');
            $(document.body).append(miTip);
            elem.data("capatip", miTip);
            elem.mouseenter(function(e){
                var miTip = $(this).data("capatip");
                miTip.css({
                    left: e.pageX + 10,
                    top: e.pageY + 5
                });
                miTip.animate(configuracion.animacionMuestra, configuracion.velocidad);
             });
            elem.mouseleave(function(e){
                var miTip = $(this).data("capatip");
                miTip.animate(configuracion.animacionOculta, configuracion.velocidad);
            });
         });
        return this;
    };

    $(document).ready(function(){
        $("#elemento1").creaTip("Tip sin parámetros específicos...");
        $("#elemento2").creaTip("Tip enviando parámetros...", {
            velocidad: 1000,
            claseTip: "otroestilotip",
            animacionMuestra: {
                opacity: "show",
                padding: '25px',
                'font-size': '2em'
            },
            animacionOculta: {
                height: "hide",
                padding: '5px',
                'font-size': '1em'
            }
        });
    })
});

miPlugin();
