package com.shop.controller;

import java.util.List;

import com.shop.entity.Board;
import com.shop.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping(value = "/board")
public class BoardController {

	private final BoardService boardService;

//	게시판 목록 조회
	@GetMapping(value = "/BoardList")
	public String getBoardList(Model model, Board board) {
		List<Board> boardList = boardService.getBoardList(board);

		model.addAttribute("boardList", boardList);
		return "board/boardlist";
	}

	// 게시글 작성 완료 버튼 클릭
	@PostMapping("/insertBoard")
	public String insertBoard(Board board) {
		boardService.insertBoard(board);
		return "redirect:BoardList";
	}

	// 새 게시글 작성 페이지로 이동
	@GetMapping("/insertBoard")
	public String insertBoardView() {
		return "board/boardcreate";
	}

	//게시글 상세보기
	@GetMapping("/getBoard")
	public String getBoard(Board board, Model model) {
		model.addAttribute("board", boardService.getBoard(board));
		return "board/boarddetail";
	}

	//게시글 상세보기
/*	@GetMapping("/viewBoard")
	public String updateBoardView(Board board, Model model) {
		model.addAttribute("board", boardService.getBoard(board));
		return "board/boardview";
	}*/

	//게시글 수정 완료 클릭
	@PostMapping("/updateBoard")
	public String updateBoard(Board board) {
		boardService.updateBoard(board);
		return "forward:BoardList";
	}

	//게시글 삭제
	@GetMapping("/deleteBoard")
	public String deleteBoard(Board board) {
		boardService.deleteBoard(board);
		return "forward:BoardList";
	}

}
