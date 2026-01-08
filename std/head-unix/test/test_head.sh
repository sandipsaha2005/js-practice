GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

run_test() {
    local test_num=$1
    local description=$2
    local cmd=$3
    local expected=$4

    actual=$(eval "$cmd" 2>&1)

    if [ "$actual" == "$expected" ]; then
        echo "${GREEN}PASS${NC} [Test $test_num: $description]"
    else
        echo "${RED}FAIL${NC} [Test $test_num: $description]"
        echo "--- Expected ---"
        echo "$expected"
        echo "--- Actual ---"
        echo "$actual"
        echo "----------------\n"
    fi
}

echo "Parsing errors"

run_test "1" "For Invalid option name" "deno -A ../head.js -a 10 poem" "head: illegal option -- -a"

run_test "2" "For invalid argument for option -n" "deno -A ../head.js -n ab poem" "head: illegal line count -- ab"

run_test "3" "For invalid argument for option -c" "deno -A ../head.js -c ab poem" "head: illegal byte count -- ab"

run_test "4" "For not giving argument after option -c" "deno -A ../head.js -c" "head: option requires an argument -- -c"

run_test "5" "For not giving argument after option -n" "deno -A ../head.js -n" "head: option requires an argument -- -n"

echo "Head outputs"
run_test "6" "For argument value of -n as 0 " "deno -A ../head.js -n 0 poem.txt" ""