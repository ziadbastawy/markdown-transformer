export function format_text(text) {
	// debugger
	return text
		.replace(/^###### (.*$)/gim, '<h6>$1</h6>')
		.replace(/^##### (.*$)/gim, '<h5>$1</h5>')
		.replace(/^#### (.*$)/gim, '<h4>$1</h4>')
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/(?:\*)(?:(?!\s))((?:(?!\*|\n).)+)(?:\*)/g, '<strong>$1</strong>')
		.replace(/(?:_)(?:(?!\s))((?:(?!\n|_).)+)(?:_)/g, '<i>$1</i>')
		.replace(/(?:~)(?:(?!\s))((?:(?!\n|~).)+)(?:~)/g, '<s>$1</s>')
		.replace(/(?:--)(?:(?!\s))((?:(?!\n|--).)+)(?:--)/g, '<u>$1</u>')
		.replace(/(?:```)(?:(?!\s))((?:(?!\n|```).)+)(?:```)/g, '<tt>$1</tt>')
		.replace(/(?:`)(?:(?!\s))((?:(?!\n|`).)+)(?:`)/g, '<code>$1</code>')
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a target='_blank' href='$2'>$1</a>")
		.replace(/\n$/gim, '<br />')
}

// .replace(/^(?:######)\s*(.+?)[ \t]*$/gm, "<h6>$1</h6>")
// .replace(/^(?:#####)\s*(.+?)[ \t]*$/gm, "<h5>$1</h5>")
// .replace(/^(?:####)\s*(.+?)[ \t]*$/gm, "<h4>$1</h4>")
// .replace(/^(?:###)\s*(.+?)[ \t]*$/gm, "<h3>$1</h3>")
// .replace(/^(?:##)\s*(.+?)[ \t]*$/gm, "<h2>$1</h2>")
// .replace(/^(?:#)\s*(.+?)[ \t]*$/gm, "<h1>$1</h1>")
// export function format_text(markdownText) {
// 	const htmlText = markdownText
// 		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
// 		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
// 		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
//      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
// 		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
// 		.replace(/\*(.*)\*/gim, '<i>$1</i>')
// 		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
// 		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
// 		.replace(/\n$/gim, '<br />')
// 	return htmlText.trim()
// }
// ![Alt text](url)
// const image = /!\[(.*?)\]\((.*?)\)/gim
// [text](url)
// const lineBreak = /\n$/gim