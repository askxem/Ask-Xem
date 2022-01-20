import retrieveGuideText from "./retrieveGuideText.js"


describe('retrieveGuideText behaves as expected per deck category', () => {

    it('returns a generic sexuality example', async () => {
        const actual = await retrieveGuideText('sexuality', 'toad', 'she/her');
    
        const expected = 'My friend toad identifies as she/her';
    
        expect(actual).toMatch(expected);
    })
    
    it('returns a rat specific example', async () => {
        const actual = await retrieveGuideText('sexuality', 'rat', 'she/her');
    
        const expected = 'My friend rat has been deadnamed. We try not to deadname our friends!';
    
        expect(actual).toMatch(expected);
    })
    
    // LATER:
        // pronoun api should be mocked
    it('returns a paragraph of examples from the pronouns api.', async () => {
        const actual = await retrieveGuideText('pronoun', 'sheep', 'she/her');
    
        const expected = 'I think she is very nice. I asked her if I can borrow her pencil. She told me that the house is hers. She said she would rather do it herself.';
    
        expect(actual).toMatch(expected);
    })
    
});