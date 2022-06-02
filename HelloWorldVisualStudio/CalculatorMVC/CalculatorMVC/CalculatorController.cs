using System;

namespace CalculatorController
{
	class CalculatorController()
	{
		private Result result;
		private Display display;
		
		public CalculatorController()
		{
			display = new Display();
			result = new Result(Display.Number1, Display.Number2);
			Display.result = Calculator.Result;
			Display.ShowResult();
		}
	}
}
