import retrieveGuideText from "./retrieveGuideText.js"

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

it('returns a paragraph of examples from the database.', async () => {
    const actual = await retrieveGuideText('pronoun', 'sheep', 'she/her');

    const expected = 'I think she is very nice. I asked her if I can borrow her pencil. She told me that the house is hers. She said she would rather do it herself.';

    expect(actual).toMatch(expected);
})