- useEffect : có 3 dạng chính 
+ useEffect không có dependencies : useEffect gọi sideEffect liên tục
+ useEffect có dependencies nhưng dependencies rỗng : useEffect gọi sideEffect 1 lần rồi dừng
+ useEffect có dependencies : sẽ gọi lại sideEffect mỗi khi dependencies thay đổi