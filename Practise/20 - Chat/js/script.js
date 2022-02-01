function getMessage() {
	$.ajaxSetup({ async: false });
	let get = $.get("https://ironlinks.ru/nordic/group12/chat/get.php");
	let json = get.responseText;
	let array = JSON.parse(json);
	document.querySelector(".messages").innerHTML = '';
	for (let i = 0; i < array.result.length; i++) {
		document.querySelector(".messages").innerHTML += `
        <div>
            <div class="message">
                ${array.result[i].text}
            </div>
        </div>
        `
	}
}

function sendMessage() {
	let inputText = $('.sendText').val();
	$.get('https://ironlinks.ru/nordic/group12/chat/save.php?text=' + inputText);
	$('.sendText').val("");
	getMessage();
}