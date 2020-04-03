/*
 * BRIEF
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.
 * Bob answers 'Sure.' if you ask him a question.
 * He answers 'Whoa, chill out!' if you yell at him.
 * He says 'Fine. Be that way!' if you address him without actually saying anything.
 * He answers 'Whatever.' to anything else.
 *
 * test 'forceful question' not explained in brief??
 */
export default class Bob {
    hey(input: string): string {
      if (input.trim().endsWith('?')) {
        if (input.match(/[A-z]+/g) && input == input.toUpperCase()) {
          return 'Calm down, I know what I\'m doing!';
        }
        return 'Sure.';
      }
      if (!input.trim().length) return 'Fine. Be that way!';
      if (input.match(/[A-z]+/g) && input == input.toUpperCase()) return 'Whoa, chill out!';
      return 'Whatever.';
    }
}

