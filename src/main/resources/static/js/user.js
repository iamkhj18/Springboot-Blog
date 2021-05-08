let index = {
	init: function(){
		$("#btn-save").on("click",()=>{
			this.save();
		});
		
	},
	
	save: function(){
		let data = {
			username: $("#username").val(),
			password: $("#password").val(),
			email: $("#email").val()
		};
		
		// ajax호출시 default가 비동기 호출
		// ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청!!
		$.ajax({
			type: "POST",
			url: "/auth/joinProc",
			data:JSON.stringify(data),
			contentType: "application/json; charset=utf-8"
		}).done(function(res){
			alert("회원가입이 완료되었습니다.");
			location.href="/";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
		
	}
	
}

index.init();