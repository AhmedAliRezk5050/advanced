namespace Advanced.Models
{
    public class Department
    {
        public long DepartmentId { get; set; }

        public string Name { get; set; } = string.Empty;

        public IEnumerable<Person>? People { get; set; }
    }
}