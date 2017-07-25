// Create a function that can take a start point, end point, and skip amount,
// to print all numbers in the range.  Make sure it works for negative numbers.
// if the user doesn't pass a skip amount, make it default
// to 1 (printRange(4, 8); would print 4, 5, 6, 7).  If the user doesn't pass
// an end point, make it start at 0, and end at the
// first (printRange(4); would print 0, 1, 2, 3).

function printRange(start = 0, end, skip = 1)
{
  console.log(start + " " + end + " " + skip)
  if (end === undefined )
  {
    end = start;
    start = 0;
  }
  for (var k = start; k < end; k++)
  {
    console.log(k);
  }
}
printRange(4);
