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

	@GetMapping(value = "/getBoardList")
	public String getBoardList(Model model, Board board) {
		List<Board> boardList = boardService.getBoardList(board);

		model.addAttribute("boardList", boardList);
		return "board/getBoardList";
	}

	@PostMapping("/insertBoard")
	public String insertBoard(Board board) {
		boardService.insertBoard(board);
		return "redirect:getBoardList";
	}

	@GetMapping("/insertBoard")
	public String insertBoardView() {
		return "board/insertBoard";
	}

	@GetMapping("/getBoard")
	public String geBoard(Board board, Model model) {
		model.addAttribute("board", boardService.getBoard(board));
		return "board/getBoard";
	}

	@PostMapping("/updateBoard")
	public String updateBoard(Board board) {
		boardService.updateBoard(board);
		return "forward:getBoardList";
	}

	@GetMapping("/deleteBoard")
	public String deleteBoard(Board board) {
		boardService.deleteBoard(board);
		return "forward:getBoardList";
	}

}
