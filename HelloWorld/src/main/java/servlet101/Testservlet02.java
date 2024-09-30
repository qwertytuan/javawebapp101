package servlet101;

import java.io.Console;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.logging.ConsoleHandler;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

class Para{
	String Name;
	String Email;
	String Message;
}
/**
 * Servlet implementation class Testservlet02
 */
@WebServlet("/Testservlet02")
public class Testservlet02 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Testservlet02() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		String Name="";
		String Email="";
		String Message="";
		Name = request.getParameter("Name");
		Email = request.getParameter("Email");
		Message = request.getParameter("Message");
		response.setContentType("text/html; charset=utf-8");
		PrintWriter output = response.getWriter();
		output.println("<h1 style=\"display:flex;justify-content: center; width:100%\">" + Name + "</h1>\r\n" +
				"	<h2>" + Email + "</h2>\r\n" +
				"<h3>" + Message + "</h3>");
		log(""+Name+" "+Email+" "+Message+" ");
	}

}
