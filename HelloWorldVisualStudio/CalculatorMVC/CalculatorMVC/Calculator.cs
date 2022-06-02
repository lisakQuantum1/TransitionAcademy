using System;

namespace Calculator
{
	class Calculator()
	{
		private Num1;
		private Num2;
		private Result;

		//default constructor
		public Calc ()
		{
			Number1 = 0;
			Number2 = 0;
			Operation = 0;
		}

		public Calc (num1, num2, op)
		{
			Number1 = num1;
			Number2 = num2;
			operation = op
		}
		
		public int Number1 
		{
			get { return Num1; }
			set { Num1 = value1; }
		}
		public int Number2
		{
			get { return Num2; }
			set { Num2 = value2; }
		}
		public Result()
		{
			if (op = a)
			{
				num1 + num2 
			}
			else if (op = s)
			{
				num1 - num2
			}
			else if(op = m)
			{
				num1 * num2
			}
			else if(op = d)
			{
				num1 / num2
			}
			else
			{
				Console.Write("This is not a valid input. Please enter choose from the operator list.")
			}
	}

}
}
