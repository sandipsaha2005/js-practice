import { assertEquals } from "@std/assert/equals";
import { noOfMoviesActedIn, peakSrk } from "../src/srk_analysis.js";
const data = Deno.readTextFileSync("finalSrk.csv").split("\n");

//
// 3. List in alphabetical order all the directors that SRK has acted with.
// 4. List all directors that SRK has worked for more than once
// 5. Which is the most popular letter that SRK films begin with? Provide a command that gives both the count and the letter?
// 6. List all the Shah Rukh Khan movies in the order of the year in which they were released. If a year has more than one movie, then it should be listed in reverse alphabetical order?
// 7. Which director has SRK worked the most with?
// 8. What is the most frequently occurring first word amongst all the movie titles in which SRK has acted
// 9. Most frequently occurring word in SRK titles. Amongst ALL the words

Deno.test("1. How many films has Shah Rukh Khan acted in?", () => {
  assertEquals(noOfMoviesActedIn(data).length, 86);
});

Deno.test("2. The year where SRK acted in the most number of movies and the number of movies he acted in that year", () => {
  assertEquals(peakSrk(data), "1995 7");
});
