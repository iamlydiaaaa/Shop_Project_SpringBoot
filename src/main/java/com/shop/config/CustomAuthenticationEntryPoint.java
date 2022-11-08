package com.shop.config;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//인증되지 않은 사용자가 ajax로 리소스를 요청할 경우 "Unauthorized"에러 발생시키고, 나머지 경우는 로그인 페이지로 리다이렉트 시킨다.
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException,
            ServletException{
          if ("XMLHttpRequest".equals(request.getHeader("x-requested-with"))){
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
          } else {
                response.sendRedirect("/members/login");
            }
    }
}
