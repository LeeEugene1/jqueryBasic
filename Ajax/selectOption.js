        function itemChange() {
            $.ajax({
                url: 'addr1.json',
                dataType: 'json',
                type: 'get',
                cache: false, //캐시데이타
                success: function (data) {
                    // console.log(data)
                    $(data.addr1).each(function (index, value) {
                        // console.log(value.age) //개별 나이만 출력해줌
                        // $('#div1').append(value.age) //1656
                        // $('#div1').append(value.age[0] + ', ' + value.age[1])
                        $('#select1').append('<option value="' + value.addr_no + '">' + value.addr_name + '</option>')
                    })
                }
            });
            // var keyboard = 
            //  $.ajax({
            //         url: 'addr1.json',
            //         dataType: 'json',
            //         type: 'get',
            //         cache: false, //캐시데이타
            //         success: function (data) {
            //             // console.log(data)
            //             $(data.addr1).each(function (index, value) {
            //                 // console.log(value.age) //개별 나이만 출력해줌
            //                 // $('#div1').append(value.age) //1656
            //                 // $('#div1').append(value.age[0] + ', ' + value.age[1])
            //                 $('#select1').append('<option value="' + value.addr_no + '">' + value.addr_name + '</option>')
            //             })
            //         }
            //     });
            // ['갈축', '청축', '적축'];
            // var mouse = ['광마우스', '유선마우스', '미키마우스'];

            // var selectItem = $("#select1").val();
            // var changeItem = [];

            // if (selectItem == "키보드") {
            //     changeItem = keyboard;
            // }
            // else if (selectItem == "마우스") {
            //     changeItem = mouse;
            // }

            // $('#select2').empty();

            // // changeItem.size()는뭐지????
            // for (var count = 0; count < changeItem.length; count++) {
            //     var option = $("<option>" + changeItem[count] + "</option>");
            //     $('#select2').append(option);
            // }

        }