export class Conway {

    private readonly NEW_LINE = "\n"
    private readonly SPACE = " "

    suite(deep: number, sourceLine: string): string {
        if (deep === 0)
            return sourceLine
        const nextLine = this.buildNextLine(sourceLine)
        return sourceLine + this.suite(deep - 1, nextLine)
    }

    private buildNextLine(sourceLine: string) {
        const sourceDigits = this.filterWhitespaces(sourceLine)
        return this.buildChunks(sourceDigits)
    }

    private filterWhitespaces(sourceLine: string) {
        const trimmedLine = sourceLine.trim()
        return trimmedLine.replace(/ /g, '')
    }

    private buildChunks(sourceDigits: string): string {
        const consecutiveDigitCount = this.countConsecutiveDigit(sourceDigits)
        const countedDigit = sourceDigits[0]
        if (sourceDigits.length === 0)
            return ''
        const leftDigits = sourceDigits.substr(consecutiveDigitCount)
        return this.buildChunk(consecutiveDigitCount, countedDigit, leftDigits)
    }

    private buildChunk(consecutiveDigitCount: number, countedDigit: string, leftDigits: string): string {
        return this.buildNextChunk(consecutiveDigitCount, countedDigit)
            + this.addSeparator(leftDigits) + this.buildChunks(leftDigits)
    }

    private buildNextChunk(consecutiveDigitCount: number, countedDigit: string) {
        return consecutiveDigitCount + this.SPACE + countedDigit
    }

    private addSeparator(leftDigits: string) {
        return (leftDigits.length > 0) ? this.SPACE : this.NEW_LINE
    }

    private countConsecutiveDigit(sourceDigits: string): number {
        if (this.isEmpty(sourceDigits) || !this.areDigitsConsecutive(sourceDigits))
            return 1
        const leftDigits = sourceDigits.substr(1)
        return 1 + this.countConsecutiveDigit(leftDigits)
    }

    private isEmpty(sourceDigits: string) {
        return !sourceDigits[0] || !sourceDigits[1]
    }

    private areDigitsConsecutive(sourceDigits: string) {
        return sourceDigits[0] === sourceDigits[1]
    }

}