using Microsoft.EntityFrameworkCore;

namespace LionKingGame.Models
{
    public class CharacterContext : DbContext
    {
        public CharacterContext(DbContextOptions<CharacterContext> options)
            : base(options)
        {

        }
        public DbSet<Character> Characters { get; set; }
    }
}
