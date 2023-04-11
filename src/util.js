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