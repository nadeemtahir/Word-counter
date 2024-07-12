#! /usr/bin/env node
import inquirer from "inquirer";
let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "please enter your sentence"
});
let word_count = user_ans.words;
let clean_para = word_count.split(" ").join("");
let words_array = word_count.split(" ");
let filter_words = words_array.filter(words => words !== " ");
console.log(`you typed ${filter_words.length} words.`);
console.log(`you typed ${clean_para.length} characters.`);
