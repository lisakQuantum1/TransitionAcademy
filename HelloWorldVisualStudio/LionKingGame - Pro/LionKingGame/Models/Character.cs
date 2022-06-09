namespace LionKingGame.Models
{
    public class Character
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsVillian { get; set; }
        public bool IsMainCharacter { get; set; }
        public bool IsSideCharacter { get; set; }

    }
}
