using System;

public class ProductService
{
    private readonly FileLogger _fileLogger = new FileLogger();
    public void Log(string message)
    {
        _fileLogger.Log(message);
    }
}
