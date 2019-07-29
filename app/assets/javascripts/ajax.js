// function getAllPosts(){
//   $.ajax({
//     url: '/posts',
//     dataType: 'json',
//     success: function(data){
//       console.log(data)
//       var container = $('.post')
//       container.empty()
//       data.forEach(function(post){
//         container.append(`
//           <h3>${post.title}</h3>
//           <p>${post.body}</p>
//           `)
//
//       })
//     },
//     error: function(){
//       console.log('something went wrong')
//     }
//   });
// }
//
// function getPost(){
//   $.ajax({
//     url: `posts/${id}.json`,
//     dataType: 'json',
//     success: function(data){
//       console.log(data)
//       var container = $('.post')
//       container.empty()
//       container.append(`
//         <h3>${data.title}</h3>
//         <p>${data.body}</p>
//         `)
//     },
//     error: function(){
//       console.log('something went wrong')
//     }
//   });
// }
//
//
// function createPost(){
//   var inputs = $('.postForm :input');
//   var values = {}
//   inputs.each(function() {
//         values[this.name] = $(this).val();
//     });
//
//   $.ajax({
//     url: '/posts',
//     type: 'post',
//     dataType: 'json',
//     data: {post:values },
//   })
//   .done(function( response ) {
//     if (response.status === 'created') {
//       console.log('The post was created' );
//     } else {
//       console.log('The post was not created' );
//     }
//   });
// }
